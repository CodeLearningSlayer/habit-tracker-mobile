import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
const headers = new Headers({
  "content-type": "application/json",
  authorization: localStorage.getItem("token"),
});

const baseUrl = "http://localhost:3010/api/habits";
const request = async (url, options) => {
    const res = await fetch(url, options);
    if (!res.ok)
        throw new Error("Couldn't fetch " + url);
    return await res.json();
}


const habitsAdapter = createEntityAdapter({
  selectId: (habit) => habit._id,
});

const initialState = habitsAdapter.getInitialState({
  totalHabits: 0,
  completedHabits: 0,
  status: null,
  error: null,
  user: null,
});

// проблема в несуществующем юзере
export const fetchHabits = createAsyncThunk(
  "habits/getHabits",
  async (state, { rejectWithValue, getState, dispatch }) => {
    try {
      const { user } = getState().user.user;
      const habits = await request(`${baseUrl}/${user._id}/allHabits`); //userа записать в стейт
      console.log(dispatch(countCompletedHabits(habits)));
      return habits;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const resetAllHabits = createAsyncThunk(
  "habits/resetHabits",
  async (state, {rejectWithValue, getState, dispatch}) => {
    try{
      const {user} = getState().user.user;
      const droppedHabits = await request(`${baseUrl}/${user._id}/habits/reset`);
      return droppedHabits;
    }
    catch(e) {
      console.log(e.message);
    }
  }
)

export const appendHabit = createAsyncThunk(
    "habits/appendHabit",
    async (habit, {rejectWithValue, dispatch, getState}) => {
        try{
            const {user} = getState().user.user
            const newHabit = await request(`${baseUrl}/${user._id}/habits/add`, {
                method: "POST",
                headers,
                body: JSON.stringify(habit)
            });
            dispatch(addHabit(newHabit));
        }
        catch(e) {
            rejectWithValue(e.message)
        }
    }
)

export const toggleHabit = createAsyncThunk(
  "habits/setHabitStatus",
  async ({ id, isCompleted }, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState().user.user;
      const data = await request(`${baseUrl}/${user._id}/habits/update/${id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ status: isCompleted }),
      });
      
      console.log(data);
      dispatch(setHabitStatus({isCompleted, id}));
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const deleteHabit = createAsyncThunk(
  "habits/deleteHabit",
  async ({id, isCompleted}, { rejectWithValue, dispatch, getState }) => {
    try{
        const { user } = getState().user.user;
        const info = await request(`${baseUrl}/${user._id}/habits/delete/${id}`, {
            method: "DELETE",
            headers
        })
        
        dispatch(removeHabit({id, isCompleted}));
        return info;
    }
    catch(e) {
        rejectWithValue(e.message);
    }
  }
);

export const modifyHabit = createAsyncThunk(
    "habits/editHabit",
    async (habit, {getState, rejectWithValue, dispatch}) => {
      try{
        const {user} = getState().user.user
        const data = await request(`${baseUrl}/${user._id}/habits/edit/${habit.habitId}`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(habit)
        });
        dispatch(editHabit(habit));
        return data;
      }
      catch(e) {
        rejectWithValue(e.message);
      }
    }
)

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit(state, action) {
      habitsAdapter.addOne(state, action.payload.newHabit);
      state.totalHabits += 1;
    },
    countCompletedHabits(state, action) {
      let counter = 0;
      for (let item of action.payload.habits) {
        if (item.isCompleted)
          counter += 1
      }
      state.completedHabits = counter;
    },
    removeHabit(state, action) {
      habitsAdapter.removeOne(state, action.payload.id);
      state.totalHabits -= 1;
      console.log(action.payload);
      if (action.payload.isCompleted)
        state.completedHabits -= 1;
      
    },
    editHabit(state, action) {
      console.log(action.payload);
      habitsAdapter.updateOne(state, {
        id: action.payload.habitId,
        changes: {
          name: action.payload.name,
          description: action.payload.description,
          filter: action.payload.filter,
        },
      });
    },
    setHabitStatus(state, action) {
      habitsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          isCompleted: action.payload.isCompleted,
        },
      });
      if (action.payload.isCompleted) {
        state.completedHabits += 1;
      } else {
        state.completedHabits -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.status = "resolved";
        if (action.payload) {
          habitsAdapter.setAll(state, action.payload.habits);
          state.totalHabits = action.payload.habits.length;
        }
      })
      .addCase(resetAllHabits.pending, state => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(resetAllHabits.fulfilled, (state, action) => {
        state.status = "resolved";
        if (action.payload) {
          console.log(action.payload, "payload");
          habitsAdapter.setAll(state, action.payload);
        }
      })
      .addCase(resetAllHabits.rejected, setError)
      .addCase(fetchHabits.rejected, setError);
  },
});
const { selectAll } = habitsAdapter.getSelectors((state) => {
  return state.habits;
});

export const filteredHabitsSelector = createSelector(
  (state) => state.filters.activeFilter,
  selectAll,
  (filter, habits) => {
    if (filter === "all") {
      console.log("all");
      return habits
    } else {
      return habits.filter(habit => habit.filter === filter);
    }
  }
);

export const habitsSelector = createSelector(
  state => {
    return state;
  },
  selectAll
)

export const { addHabit, removeHabit, resetHabits, editHabit, setHabitStatus, getHabits, countCompletedHabits } = habitsSlice.actions;
export default habitsSlice.reducer;

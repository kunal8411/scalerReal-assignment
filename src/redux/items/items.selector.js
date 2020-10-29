
import { createSelector } from 'reselect';

const selectItem = state => state.items;

export const selectItems = createSelector(
    [selectItem],
    items => items.items
  );
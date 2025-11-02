import React from 'react';
import cn from 'classnames';
import { Todo } from '../types/Todo';
/* eslint-disable @typescript-eslint/indent */
type Props = {
  activeCount: number;
  filter: 'all' | 'active' | 'completed';
  setFilter: React.Dispatch<
    React.SetStateAction<'all' | 'active' | 'completed'>
  >;
  todos: Todo[];
  handleClearCompleted: () => Promise<void>;
  deletingId: number[];
};
/* eslint-enable @typescript-eslint/indent */
export const TodoFooter: React.FC<Props> = ({
  activeCount,
  filter,
  setFilter,
  todos,
  handleClearCompleted,
}) => {
  const hasCompleted = todos.some(todo => todo.completed);

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', { selected: filter === 'all' })}
          data-cy="FilterLinkAll"
          onClick={() => setFilter('all')}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', { selected: filter === 'active' })}
          data-cy="FilterLinkActive"
          onClick={() => setFilter('active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', { selected: filter === 'completed' })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter('completed')}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={handleClearCompleted}
        disabled={!hasCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};

export const LongTitle = {
  args: {
    task: {
      ...Default.args.task,
      title:
        "Reactで構築したUIコンポーネントをStoryBookでプロジェクトチーム内で共有する方法を本講座では学びます。コンポーネント駆動開発(CDD)しながらStoryBookの理解を深め、実務で使えるStoryBookの技術力を身に着けます",
    },
  },
};

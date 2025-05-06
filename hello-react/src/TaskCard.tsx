import './TaskCard.css';

// Define the interface for the props
interface TaskCardProps {
  title: string;
  dueDate?: string; // Optional because not all tasks will have a dueDate (only 'pending' tasks)
  completedAtDate?: string; // Optional because not all tasks will have a completedAtDate (only 'done' tasks)
  assigneeName: string;
  status: 'pending' | 'done'; // Enum-like status with specific values
}

const TaskCard = (props: TaskCardProps) => {
  const { title, dueDate, completedAtDate, assigneeName, status } = props;

  return (
    <div className="TaskItem bg-white shadow p-3 rounded border mb-2">
      <h2 className="text-md font-bold text-gray-800">{title}</h2>
      {status === "pending" && dueDate && (
        <p className="text-sm text-gray-600">Due on: {dueDate}</p>
      )}
      {status === "done" && completedAtDate && (
        <p className="text-sm text-gray-600">Completed on: {completedAtDate}</p>
      )}
      <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;

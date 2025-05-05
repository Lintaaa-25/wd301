import './TaskCard.css';

const TaskCard = (props) => {
  const { title, dueDate, completedAtDate, assigneeName, status } = props;

  return (
    <div className="TaskItem bg-white shadow p-3 rounded border mb-2">
      <h2 className="text-md font-bold text-gray-800">{title}</h2>
      {status === "pending" && (
        <p className="text-sm text-gray-600">Due on: {dueDate}</p>
      )}
      {status === "done" && (
        <p className="text-sm text-gray-600">Completed on: {completedAtDate}</p>
      )}
      <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;

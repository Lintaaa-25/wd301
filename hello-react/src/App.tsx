// App.tsx

import TaskCard from './TaskCard';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Smarter Tasks</h1>
      <p className="text-gray-700 mb-6">
        <strong>Project:</strong> Graduation Final Year Project (Revamp College Website)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Pending</h2>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
            status="pending"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
            status="pending"
          />
          <div className="mt-2 text-gray-500 border rounded px-3 py-2">+ New task</div>
        </div>

        {/* Done Tasks */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Done</h2>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
            status="done"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
            status="done"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

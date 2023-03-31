import { endOfMonth, startOfMonth, startOfWeek, endOfWeek, isSameDay, format, addDays, subMonths, addMonths } from 'date-fns';

export function Calendario({ value, onChange, className }) {
  const monthStart = startOfMonth(value);
  const dateFormat = "d";
  const startDate = startOfWeek(monthStart);
  const monthEnd = endOfMonth(value);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={day}
          onClick={() => onChange(day)}
          className={`day cursor-pointer p-2 rounded-full ${
            isSameDay(day, value) ? "bg-indigo-500 text-white" : ""
          }`}
        >
          {format(day, dateFormat)}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div key={day} className="week flex flex-row">
        {days}
      </div>
    );
    days = [];
  }

  return (
    <div className={className}>
      <div className="header flex flex-row justify-between items-center mb-2">
        <div
          onClick={() => onChange(subMonths(value, 1))}
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          &lt;
        </div>
        <div className="text-lg font-bold">
          {format(value, "MMMM yyyy")}
        </div>
        <div
          onClick={() => onChange(addMonths(value, 1))}
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          &gt;
        </div>
      </div>
      <div className="body">
        <div className="weekdays flex flex-row">
          <div className="day-name w-1/7 text-center text-gray-500">S</div>
          <div className="day-name w-1/7 text-center text-gray-500">M</div>
          <div className="day-name w-1/7 text-center text-gray-500">T</div>
          <div className="day-name w-1/7 text-center text-gray-500">W</div>
          <div className="day-name w-1/7 text-center text-gray-500">T</div>
          <div className="day-name w-1/7 text-center text-gray-500">F</div>
          <div className="day-name w-1/7 text-center text-gray-500">S</div>
        </div>
        {rows}
      </div>
    </div>
  );
}

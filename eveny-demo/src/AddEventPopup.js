import { useState } from "react";

export function AddEventPopup({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [eventDateTime, setEventDateTime] = useState(null);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSaveClick = () => {
    const eventDateTime = new Date(`${date}T${time}:00`);
    const offset = eventDateTime.getTimezoneOffset();
    const eventDateTimeWithOffset = new Date(
      eventDateTime.getTime() - new Date().getTimezoneOffset() * 60 * 1000 - 1 * 60 * 60 * 1000 // offset for CET (UTC+1) with daylight saving time (UTC+2)
    );
    
    onSave(title, description, eventDateTimeWithOffset);
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setEventDateTime(eventDateTimeWithOffset);
    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          className="inline-block align-bottom mt-8 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-headline"
            >
              Add New Event
            </h2>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="event-title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event-title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter event title"
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="event-description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event-description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter event description"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="event-date"
                >
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px: 3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
id="event-date"
type="date"
value={date}
onChange={handleDateChange}
placeholder="Enter event date"
/>
</div>
<div className="w-1/2 ml-2">
<label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="event-time"
             >
Time
</label>
<input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="event-time"
               type="time"
               value={time}
               onChange={handleTimeChange}
               placeholder="Enter event time"
             />
</div>
</div>
</div>
<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
<button
           type="button"
           className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
           onClick={handleSaveClick}
         >
Save
</button>
{eventDateTime && (
  <p>{eventDateTime.toLocaleString()}</p>
)}
<button
           type="button"
           className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
           onClick={onClose}
         >
Cancel
</button>
</div>
</div>
</div>
</div>
);
}

export default AddEventPopup
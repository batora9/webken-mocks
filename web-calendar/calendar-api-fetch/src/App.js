import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [text, setText] = useState('');
  const handleShowDetail = (item) => {
    setText(item.description);
  }
  useEffect(() => {
    (async () => {
      const res = await fetch('https://clients6.google.com/calendar/v3/calendars/9b217b7c39e5a52468774ce79daa0703f78ad7928c8bae104cdaa811be68618e@group.calendar.google.com/events?calendarId=9b217b7c39e5a52468774ce79daa0703f78ad7928c8bae104cdaa811be68618e%40group.calendar.google.com&singleEvents=true&eventTypes=default&eventTypes=focusTime&eventTypes=outOfOffice&timeZone=Asia%2FTokyo&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=2024-05-26T00%3A00%3A00%2B09%3A00&timeMax=2024-07-07T00%3A00%3A00%2B09%3A00&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs&%24unique=gc237').then(r =>
        r.json()).catch(_ => [])
      setData(res)
    })();
  }, []);
  return (
    <div>
      <h1>Calendar API Fetch Test</h1>
      <ul>
        {data && data.items.map((item, index) => (
          <li key={index}>
            <h2>{item.summary}</h2>
            <p>{item.start.dateTime} - {item.end.dateTime}</p>
            <button onClick={() => handleShowDetail(item)}>Show Detail</button>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

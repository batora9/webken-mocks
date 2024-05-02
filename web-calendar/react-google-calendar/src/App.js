import React, { useState } from 'react'; // useStateをインポート

// 1.パッケージを読み込む
import ApiCalendar from "react-google-calendar-api";
import './App.css';
import config from "./apiGoogleconfig.json"

const apiCalendar = new ApiCalendar(config);
const calendarId = "9b217b7c39e5a52468774ce79daa0703f78ad7928c8bae104cdaa811be68618e@group.calendar.google.com";

function App() {
  // 2. itemsをuseStateフックで状態管理する
  const [items, setItems] = useState([]);

  const getEvents = async () => {
    return new Promise(async (resolve, reject) => {
      // 3.認証チェック
      if (apiCalendar.sign) {
        // 4.イベントの取得
        apiCalendar.listEvents({
          // 先月の予定を取得
          timeMin: new Date(new Date().getFullYear(), new Date().getMonth() - 1).toISOString(),
          timeMax: new Date().toISOString(),
          showDeleted: true,
          maxResults: 10,
          orderBy: 'updated'
        }, calendarId).then(({ result }) => {
          if (result.items) {
            console.log("Events From Calendar", result.items);
            // 5. itemsを更新する
            setItems(result.items);
          } else {
            console.log("No Events")
          }

          resolve(result);
        });
      } else {
        // 6.認証していなければOAuth認証
        await apiCalendar.handleAuthClick();
        reject("Sign in first");

      }
    })
  };

  return (
    <div>
      <button onClick={getEvents}>Get Events</button>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.summary}</h2>
          <p>{item.description}</p>
          <p>{item.start.dateTime}</p>
          <p>{item.end.dateTime}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

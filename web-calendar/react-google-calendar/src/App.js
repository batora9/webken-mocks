// 1.パッケージを読み込む
import ApiCalendar from "react-google-calendar-api";
import './App.css';
import config from "./apiGoogleconfig.json"

const apiCalendar = new ApiCalendar(config);
const calendarId = "9b217b7c39e5a52468774ce79daa0703f78ad7928c8bae104cdaa811be68618e@group.calendar.google.com";

function App() {
  const items = [];

  const getEvents = async () => {
    return new Promise(async (resolve, reject) => {
      // 2.認証チェック
      if (apiCalendar.sign) {
         // 3.イベントの取得
         apiCalendar.listEvents({
            // 先月の予定を取得
            timeMin: new Date(new Date().getFullYear(), new Date().getMonth() - 1).toISOString(),
            timeMax: new Date().toISOString(),
            showDeleted: true,
            maxResults: 10,
            orderBy: 'updated'
          },calendarId).then(({ result }) => {
            if (result.items) {
              console.log("Events From Calendar", result.items);
              items.push(...result.items);
            } else {
              console.log("No Events")
            }

            resolve(result);
          });
      } else {
        // 2.認証していなければOAuth認証
        await apiCalendar.handleAuthClick();
        reject("Sign in first");
      
      }
    })
  };

  return (
    <div className="App">
      <button onClick={getEvents}>Get Events</button>
    </div>
  );
}

export default App;

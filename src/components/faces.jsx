import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Faces({mood}) {

    var moodEmoji;
    var moodText;

    try{
        if (mood === "positive"){
            moodEmoji = <h1 className="moodEmoji" id="mood">😊</h1>
            moodText = <h1 className="moodText" id="moodText">THIS TEXT IS POSITIVE</h1>
        } else if (mood === "negative"){
            moodEmoji = <h1 className="moodEmoji" id="mood">😡</h1>
            moodText = <h1 className="moodText" id="moodText">THIS TEXT IS NEGATIVE</h1>
        } else if (mood === "neutral"){
            moodEmoji = <h1 className="moodEmoji" id="mood">😐</h1>
            moodText = <h1 className="moodText" id="moodText">THIS TEXT IS NEUTRAL</h1>
        }
    } catch (error){
        console.log("Error" + error)
    }
    
    return (
      <div className="faces">
        <div>
            {moodEmoji}
        </div>
        <div>
            {moodText}
        </div>
      </div>
    );
  }
  
  export default Faces;
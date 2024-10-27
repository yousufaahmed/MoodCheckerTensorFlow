import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Faces({moodArray}) {

    var moodEmoji;
    var moodText;
    var mood;

    const emotions = ["Playful", "Infuriating", "Sentimental", "Cynical", "Depressing", "Awe-inspiring", "Patriotic", "Begrudging", "Educational", "Hopeful", "Sarcastic", "Disrespectful", "Disparaging"];

    for (let i = 0; i < moodArray.length; i++) {
        if (moodArray[i] === 100){
            mood = emotions[i];
        }
    }

    try{
        switch (mood) {
            case "Playful":
                moodEmoji = <h1 className="moodEmoji" id="mood">😜</h1>;
                moodText = <h1 className="moodText" id="moodText">Feeling playful and ready for fun!</h1>;
                break;
            case "Infuriating":
                moodEmoji = <h1 className="moodEmoji" id="mood">😡</h1>;
                moodText = <h1 className="moodText" id="moodText">This is making me so mad!</h1>;
                break;
            case "Sentimental":
                moodEmoji = <h1 className="moodEmoji" id="mood">🥹</h1>;
                moodText = <h1 className="moodText" id="moodText">Feeling nostalgic and sentimental.</h1>;
                break;
            case "Cynical":
                moodEmoji = <h1 className="moodEmoji" id="mood">😒</h1>;
                moodText = <h1 className="moodText" id="moodText">Questioning everything with a hint of sarcasm.</h1>;
                break;
            case "Depressing":
                moodEmoji = <h1 className="moodEmoji" id="mood">😞</h1>;
                moodText = <h1 className="moodText" id="moodText">Feeling a bit down and blue.</h1>;
                break;
            case "Awe-inspiring":
                moodEmoji = <h1 className="moodEmoji" id="mood">🤩</h1>;
                moodText = <h1 className="moodText" id="moodText">Filled with awe and wonder!</h1>;
                break;
            case "Patriotic":
                moodEmoji = <h1 className="moodEmoji" id="mood">🇬🇧</h1>;
                moodText = <h1 className="moodText" id="moodText">Feeling a surge of patriotism!</h1>;
                break;
            case "Begrudging":
                moodEmoji = <h1 className="moodEmoji" id="mood">🙄</h1>;
                moodText = <h1 className="moodText" id="moodText">Doing it... but not happily.</h1>;
                break;
            case "Educational":
                moodEmoji = <h1 className="moodEmoji" id="mood">📚</h1>;
                moodText = <h1 className="moodText" id="moodText">Learning something new and exciting!</h1>;
                break;
            case "Hopeful":
                moodEmoji = <h1 className="moodEmoji" id="mood">🤞</h1>;
                moodText = <h1 className="moodText" id="moodText">Feeling hopeful and optimistic!</h1>;
                break;
            case "Sarcastic":
                moodEmoji = <h1 className="moodEmoji" id="mood">😏</h1>;
                moodText = <h1 className="moodText" id="moodText">Oh sure, like that's really going to happen...</h1>;
                break;
            case "Disrespectful":
                moodEmoji = <h1 className="moodEmoji" id="mood">😠</h1>;
                moodText = <h1 className="moodText" id="moodText">Showing no respect!</h1>;
                break;
            case "Disparaging":
                moodEmoji = <h1 className="moodEmoji" id="mood">🙁</h1>;
                moodText = <h1 className="moodText" id="moodText">Expressing low opinion and criticism.</h1>;
                break;
            default:
                moodEmoji = <h1 className="moodEmoji" id="mood">🙂</h1>;
                moodText = <h1 className="moodText" id="moodText">Mood not specified, but all is well!</h1>;
                break;
        }
    } catch (error){
        console.log("Error" + error)
    }
    
    return (
      <div className="faces">
        <div>
            {moodEmoji}
            {moodText}
        </div>
      </div>
    );
  }
  
  export default Faces;
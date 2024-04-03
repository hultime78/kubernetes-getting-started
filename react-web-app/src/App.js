import "./App.css";
import Confetti from "./Confetti";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h2 style={{ marginBottom: "0px" }}>Welcome to getting started with kubernetes, A tutorial series by : </h2>
        <div className="Hero-section">

          <div className="Hero-item">
              <img src="https://avatars.githubusercontent.com/u/53883322?v=4" width={"50px"} height={"50px"}/>
              <span><a target="_blank"
            href={
              "https://github.com/hultime78/" 
             
            }
             >Aaron Mangbenza</a></span>
          </div>
          <div className="Hero-item">
              <img src="https://i.pinimg.com/736x/01/2f/2e/012f2ed1aa58caa27d389e4e6670506b.jpg" width={"50px"} height={"50px"}/>
              <span><a target="_blank"
            href={
              "https://github.com/gaeltan" 
             
            }
             >Gael Tanckwe</a></span>
          </div>
          <div className="Hero-item">
              <img src="https://i.pinimg.com/564x/b6/b6/15/b6b615f8f03bf1ea6481c643e6190890.jpg" width={"50px"} height={"50px"}/>
              <span><a target="_blank"
            href={
              "https://github.com/gabbryella" 
             
            }
             >Gabriella Nshombo</a></span>
             
          </div>
          <div className="Hero-item">
              <img src="https://i.pinimg.com/564x/2f/aa/76/2faa768e933206b9dfc8b852e84fb016.jpg" width={"50px"} height={"50px"}/>
              <span><a target="_blank"
            href={
              "https://github.com/enerusama" 
             
            }
             >Amos Makal</a></span>
             
          </div>

          <div className="Hero-item">
              <img src="https://i.pinimg.com/564x/a9/1c/ec/a91cec26758013f363420203c7457650.jpg" width={"50px"} height={"50px"}/>
              <span><a target="_blank"
            href={
              "https://github.com/aladin-le-prince" 
             
            }
             >Candy Kashaka</a></span>
             
          </div>
          <div className="Hero-item">
              <img src="https://i.pinimg.com/564x/87/20/b6/8720b690ee0f64dc1d282098a956e8c1.jpg" width={"50px"} height={"50px"}/>
              <span><a target="_blank"
            href={
              "https://github.com/yakambicredo" 
             
            }
             >Crédo Yakambi</a></span>
             
          </div>

          <div className="Hero-item">
              <img src="https://i.pinimg.com/564x/91/86/bd/9186bd321016179cf18eda25695712a3.jpg" width={"50px"} height={"50px"}/>
              <span><a target="_blank"
            href={
              "https://github.com/freezecorleone66" 
             
            }
             >Joyce Mukadi</a></span>
             
          </div>         
                       
        </div>

        <div className="row btn-wrapper">
               <a href="https://github.com/hultime78/kubernetes-getting-started" 
               target="_blank"
               className="Full-c-btn ">
                  view the full course
               </a>
              
          </div>
      </header>
    </div>
  );
};

export default App;

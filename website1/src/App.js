import PostList from "./Components/PostList"
import MainHeader from "./Components/MainHeader"
import {useState} from "react"

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function showModalhandler() {
        setModalIsVisible(true);
    }
    function closeModalHandler() {
        setModalIsVisible(false);
    }
    return (
        <>
            <MainHeader showModal={showModalhandler}/>
            <main>
                <PostList modalIsVisible={modalIsVisible}
                    closeModal={closeModalHandler}/>
            </main>
        </>
    );
}

export default App;

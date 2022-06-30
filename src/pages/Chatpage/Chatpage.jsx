import Chat from "../../components/Chat";
import Form from "../../components/Form";

const Chatpage = ({ socket }) => {
    return (
        <>
            <Chat socket={ socket} />
            <Form socket={ socket}/>
        </>
    )
 }

export default Chatpage;
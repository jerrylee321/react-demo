import { useEffect, useState } from "react"

function Friend(props) {
    const [isOnline, setIsOnline] = useState(null)
    const ChatAPI = null
    useEffect(()=>{
        function changeStatus (status) {
            setIsOnline(status.isOnline)
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, changeStatus)
        return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, changeStatus);
          };
    })
    if (isOnline === null) {
        return 'Loading...';
      }
    return isOnline ? 'online':'offline'
}

export  default Friend
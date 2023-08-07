const Notification = ({ message}) => {
    const style = {
        color: message.color
    }
    if (!message.msg) {
      return null
    } else {
        return (
          <div className='error' style={style}>
            {message.msg}
          </div>
        )
    }
}

export default Notification
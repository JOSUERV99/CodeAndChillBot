const randomMessage = (messageList) => { 
    return messageList[Math.floor(Math.random() * messageList.length)] 
}

module.exports = { randomMessage };
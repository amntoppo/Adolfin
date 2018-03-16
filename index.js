module.exports = (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
module.exports = robot => {
    robot.on('issues.opened', async context => {
        // A new issue was opened, what should we do with it?
        const issueComment = context.issue({ body: 'Hello World' })
        return context.github.issues.createComment(issueComment)
    })
}



const ronin     = require( 'ronin-server' )
const mocks     = require( 'ronin-mocks' )
 
const server = ronin.server()
 
server.use( '/', mocks.server( server.Router(), false, true ) )
server.start()

#this is a comment for the editing the node file from the test branch

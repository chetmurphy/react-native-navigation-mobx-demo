import App from './app/AppRoot';
export default App; 

// Setup logging options using process.env.LOGGING as a guard like this
// if(process.env.LOGGING) { /* put console.log statements here*/ }
process.env['LOGGING'] = 1;
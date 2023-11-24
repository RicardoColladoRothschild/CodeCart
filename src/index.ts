import Express from 'express';

const App= Express();
const port= 8080;

App.get('/', (req, resp)=>{
    const answer = {
        appName: 'Code Cart',
        details: 'Ecommerce site.'
    };
    resp.send(answer);
});


App.listen(port, ()=>{
    console.log('\nApp listening in port: ', port);
})

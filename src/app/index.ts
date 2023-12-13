import Express from 'express';

const PORT= 8080;

const App= Express();

App.listen(PORT, ()=>{
    console.log('\n\tApp running on port: ', PORT);
});

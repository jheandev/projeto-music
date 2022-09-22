
import React from 'react'
import {Routes ,Route, Router } from 'react-router-dom';

import NavbarMusic from './components/NavbarMusic';
import DiscoverMusic from './components/DiscoverMusic';
import JoinMusic from './components/JoinMusic';



function App() {
    return(
       
<Router>
   <Routes>

           <Route path="/NavbarMusic" component={NavbarMusic}  />
           <Route path="/contato" component={DiscoverMusic} />
           <Route path="/sobre" component={JoinMusic} />

      </Routes>

   </Router>

    );


}


export default App;

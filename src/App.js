import React from 'react';
import { Code, MessageCircle, Heart, Mail } from 'react-feather';
import Link from './Components/Link';
import Emoji from './Components/Emoji';
import './App.css';

const App = () => (
  <div className="container">
    <Emoji symbol="👨‍💻" />
    <h1>Danny McClain</h1>
    <p>
      I’m a digital product designer crafting apps and interfaces. Currently
      having lots of fun learning React.
    </p>

    <div className="links">
      <Link
        url="https://github.com/dannymcclain"
        icon={<Code size={20} />}
        title="Github"
      />
      <Link
        url="https://twitter.com/dannymcclain"
        icon={<MessageCircle size={20} />}
        title="Twitter"
      />
      <Link
        url="https://dribbble.com/dannymcclain"
        icon={<Heart size={20} />}
        title="Dribbble"
      />
      <Link
        url="mailto:dannyxmcclain@gmail.com"
        icon={<Mail size={20} />}
        title="Email"
      />
    </div>
  </div>
);

export default App;

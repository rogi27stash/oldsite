import React from 'react'

class WebsiteFooter extends React.Component {
    render() {
      return (

      <footer>
      <p>&copy; 2018–{(new Date().getFullYear())} by <a target="_blank" rel="noopener noreferrer" href="https://vk.com/igorryzhenkov">Igor Ryzhenkov</a></p>
      </footer>
      
      );
    }
}

export default WebsiteFooter

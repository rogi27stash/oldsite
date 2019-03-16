import React from "react";

// Small hack to change page title.

class PageTitle extends React.Component{
    componentDidMount() {
      document.title = `Voknehzyr – ${this.props.titleName}`
    }

    render() {
        return null;
      }
}

export default PageTitle

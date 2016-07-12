import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageLayout } from 'rs-page';
import Header from '../components/common/Header.js';
import Footer from '../components/common/Footer.js';

export default class Layout extends PageLayout {
    static init(Component) {
        ReactDOM.render(<Component />, document.getElementById('app'));
    }

    system = {
        name: 'Salt'
    }

    renderHeader() {
        return <Header system={this.system} />
    }

    renderFooter() {
        return <Footer system={this.system} />
    }
}

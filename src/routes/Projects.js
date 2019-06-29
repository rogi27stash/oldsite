import React from 'react'

import PageTitle from '../components/PageTitle';
import ContentLoader, {Code} from 'react-content-loader';

import {useTranslation} from 'react-i18next';

function getResponce() {
    fetch('https://voknehzyr.ru/test')
        .then(function (responce) {
            console.log(responce);
            return responce.json;
        }, function (error) {
            console.log(error);
            // handle network error
        });
}

function Project({match}) {

    const {t} = useTranslation();
    var responce = getResponce();
    console.log(responce);
    console.log('xd');

    return (
        <div>

            <PageTitle titleName={t("page_titles.projects")}/>
            <p>here {this.getResponce}</p>
            <div className="card-block">
                <div className="card-block__inner">
                    <p>{match.params.project}</p>

                </div>
            </div>

        </div>
    );

}

function Projectss({match}) {

    const {t} = useTranslation();
    var responce = getResponce();
    console.log(responce);

    return (
        <div>

            <PageTitle titleName={t("page_titles.projects")}/>
            <p>here {responce}</p>
            <div className="card-block">
                <div className="card-block__inner">
                    <p>{match.params.project}</p>

                </div>
            </div>

        </div>
    );

}

class Projects extends React.Component {
    appFetched = false;
    appMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            projectList: "",
        };
    }

    componentDidMount() {
        if (this.appFetched)
            return;
        this.appMounted = true;

        fetch('https://voknehzyr.ru/test')
            .then(res => res.json())
            .then((responce) => {
                this.appFetched = true;

                if (this.appMounted) {
                    this.setState({
                        loaded: true,
                        projectList: responce
                    });
                }

                this.appFetched = false;
                console.log(responce);
            }, (error) => {
                console.log(error);
                // handle network error
            });
    }

    componentWillUnmount() {
        this.appFetched = false;
        this.appMounted = false;
    }

    render() {
        const {loaded} = this.state;
        if (!loaded) {
            return (
                <center>
                    <h2>Loading...</h2>
                </center>
            );
        } else {
            return (
                <div key={this.projectList}><p>Gay</p></div>
            );
        }
    }
}

export {Projects, Project}

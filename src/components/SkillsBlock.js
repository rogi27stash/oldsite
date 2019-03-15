import React from 'react'

class SkillsBlock extends React.Component {
    render() {
        return (

            <div className="skills-card">
                {/* <div className="skills-card__icon">
                    <img src={this.props.icon} />
                </div> */}
                <div className="skills-card__data">
                    <p className="data__title">{this.props.language}</p>
                    <p>{this.props.desc}</p>
                </div>

                <div className="skills-card__progressbar">
                    <div
                        className="progressbar__progress"
                        style={{
                        width: `${this.props.progress}%`
                    }}>
                        <span>{this.props.progress}%</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default SkillsBlock

import React, { Component } from 'react';
import { configure } from 'enzyme';
import PropTypes from 'prop-types';

// CSS
import './TypeWriter.css';

// TEST
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


const FirstLineText = ({activeText, style, isCursor, cursorType}) => (
    <h1 style={style}>
        <span className="text">{activeText}</span> 
        {!isCursor && <span className={"cursor " + cursorType}></span>}
    </h1>
)

const SecondLineText = ({style, cursorType, activeText}) => (
    <h2 style={style}>
        <span className="text">{activeText}</span> 
        <span className={"cursor " + cursorType}></span>
    </h2>
)

class TypeWriter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeElementCharIndex: 1,
            activeElementCounter: 0,
            activeTextSecondLine: "",
            activeTextFirstLine: "",
            isFirstCursorHidden: false
        }

        this.showWritingText = this.showWritingText.bind(this);
    }
    componentDidMount() {
        this.showWritingText();
    }
    setTextStyle() {
        return {
            color: this.props.color,
            fontSize: this.props.size,
            fontFamily: this.props.font
        }
    }    
    showWritingText() {
        const { activeElementCharIndex, activeElementCounter } = this.state;
        const { elements, speed } = this.props;
        let theTimeout;

        // stop aplication when condition is correct
        if (activeElementCounter + 1 > elements.length) 
        {
            if (!theTimeout) {
                return
            }
            clearTimeout(theTimeout);
            return;
        }

        // When the index of the active letter is smaller than the item length
        if (activeElementCharIndex <= elements[activeElementCounter].length) {
            const activeText = elements[activeElementCounter].substring(0, activeElementCharIndex);
            
            // Set value to first line element
            if (activeElementCounter === 0) {
            
                this.setState({
                    "activeTextFirstLine": activeText,
                    "isFirstCursorHidden": elements[activeElementCounter].length === activeElementCharIndex
                })

            } else {

                this.setState({
                    "activeTextSecondLine": activeText
                })

            }

            theTimeout = setTimeout(this.showWritingText, speed);

            this.setState({
                "activeElementCharIndex": activeElementCharIndex + 1
            })

        } else {
            
            // Increase the index for the next item from array              
            this.setState({
                "activeElementCharIndex": 1,
                "activeElementCounter": activeElementCounter + 1,
            }, () => {

                theTimeout = setTimeout(this.showWritingText, speed);

            })
        }
    }
    render() {

        return (
            <div className="application__container">
                <FirstLineText
                    style={this.setTextStyle()}
                    activeText={this.state.activeTextFirstLine}
                    isCursor={this.state.isFirstCursorHidden}
                    cursorType={this.props.cursorType}
                />
                                       
                {this.state.activeTextSecondLine && (
                    <SecondLineText
                        style={this.setTextStyle()}
                        cursorType={this.props.cursorType}
                        activeText={this.state.activeTextSecondLine}  
                    />
                )}
            </div>
        );
    }
};

TypeWriter.defaultProps = {
    speed: 500,
    cursorType: "pipe",
    color: "blue",
    size: 40,
    font: "arial"
};

TypeWriter.propTypes = {
    elements: PropTypes.array.isRequired,
    speed: PropTypes.number,
    cursorType: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    font: PropTypes.string
}

export default TypeWriter;
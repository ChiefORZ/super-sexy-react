import React from 'react';
import cx from 'classnames';

class ProgressBar extends React.Component {
  static propTypes = {
    percent: React.PropTypes.number.isRequired,
    onTop: React.PropTypes.bool,
    autoIncrement: React.PropTypes.bool,
    intervalTime: React.PropTypes.number
  };

  static defaultProps = {
    percent: -1,
    onTop: false,
    autoIncrement: false,
    intervalTime: 200
  };

  state = {
    percent: this.props.percent
  };

  increment = () => {
    let percent = this.state.percent + (Math.random() + 1 - Math.random());
    percent = percent < 99 ? percent : 99;
    this.setState({
      percent: percent
    });
  };

  handleProps = (props) => {
    if (props.autoIncrement && props.percent >= 0 && props.percent < 99) {
      this.interval = setInterval(this.increment, props.intervalTime);
    }

    if (props.percent >= 100) {
      this.setState({
        percent: 99.9
      }, () => {
        this.timeout = setTimeout(() => {
          this.setState({
            percent: -1
          });
        }, 400);
      });
    } else {
      this.setState({
        percent: props.percent
      });
    }
  };

  componentDidMount = () => {
    this.handleProps(this.props);
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.handleProps(nextProps);
  };

  componentWillUnmount = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };

  render() {
    require('./progressbar.scss');
    let className = cx({
      'progressbar': true,
      'progressbar--ontop': this.props.onTop,
      'progressbar--hide': this.state.percent < 0 || this.state.percent >= 100
    });
    let style = {width: (this.state.percent < 0 ? 0 : this.state.percent) + '%'};
    return (
      <div className={ className }>
        <div className='progressbar__percent' style={ style }/>
        <div className='progressbar__spinner'>
          <div className='progressbar__spinner__icon'/>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

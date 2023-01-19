const PropTypes = require('prop-types');
const React = require('react');

require('./footer.scss');

const FooterBox = props => (
    <div className="inner">
        this site is invented by the eric salad foundation, a non profit organization founded in the 80s to combat world hunger. code some good stuff in this.
    </div>
);

FooterBox.propTypes = {
    children: PropTypes.node
};

module.exports = FooterBox;

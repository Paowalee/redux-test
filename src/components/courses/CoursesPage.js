import React from 'react';
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CourserPage extends React.Component {
    state ={
        course: {
            title: ""
        }
    };

    handleChange = event => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({ course });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <imput
                type="text"
                onChange={this.handleChange}
                value={this.state.course.title}
                />

                <input type="submit" value="Save" />
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        );
    }
}

    CourserPage.propTypes = {
        courses: PropTypes.array.isRequired,
        actions: PropsTypes.object.isRequired
    };

    function mapStateToProps(state) {
        return {
            courses: state.course
        };
    }

    function mapDispatchToProps(state) {
        return {
            actions: bindActionCreators(courseActions, dispatch)
        };
    }

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(CourserPage);


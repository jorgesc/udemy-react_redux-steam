import React from "react";
import {Field, reduxForm} from "redux-form";
import {Form, Input, Button} from "semantic-ui-react";

class StreamCreate extends React.Component {
  renderInput(p) {
    return (
      <Form.Field>
        <label>{p.label}</label>
        <Input placeholder={p.placeholder} {...p.input} />
      </Form.Field>
    );
  }

  onSubmit(v) {
    console.log(v);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          component={this.renderInput}
          type="text"
          label="Enter Title"
          placeholder="Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          type="text"
          label="Enter description"
          placeholder="Description"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default reduxForm({form: "streamCreate"})(StreamCreate);

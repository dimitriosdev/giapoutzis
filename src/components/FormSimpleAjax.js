import React, { Fragment } from 'react'
// import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Contact',
    subject: 'Μήνυμα από xilinapatomata.gr', // optional subject of the notification email
    action: '',
    successMessage: 'Λάβαμε το μήνυμά σας, ευχαριστούμε',
    errorMessage:
      'Το μήνυμά σας δεν μπόρεσε να σταλεί, προσπαθήστε να επικοινωνήσετε τηλεφωνικά μαζί μας'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action, {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }


  render() {
    const { name, subject } = this.props

    return (
      <Fragment>
        {/* <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" />
        </Helmet> */}
        <form
          className="Form"
          name={name}
          method="post"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          netlify-recaptcha=""
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Όνπμα"
              name="name"
              required
            />
            <span>Όνομα</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Email"
              name="emailAddress"
              required
            />
            <span>Email</span>
          </label>
          <div className="Form--Label">Τι είδους εργασία χρειάζεσαι;</div>
          <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              defaultValue="Τοποθέτηση"
              required
            >
              <option value='Τοποθέτηση'>Τοποθέτηση</option>
              <option value='Συντήρηση'>Συντήρηση / Επισκευή</option>
            </select>
          </label>
          <div className="Form--Label">Με τι είδους δάπεδο θα γίνει η εργασία;</div>
          <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              defaultValue="Δάπεδο τύπου Laminate"
              required
            >
              <option value='Ξύλινο δάπεδο'>Ξύλινο δάπεδο μασίφ ή προγυαλισμένο</option>
              <option value='Laminate'>Δάπεδο τύπου Laminate</option>
              <option value=''>Βιομηχανικό/Σταμπωτό δάπεδο</option>
              <option value='Deck'>Deck εξωτερικού χώρου</option>
            </select>
          </label>
          <div className="Form--Label">Πόσα τετραγωνικά είναι οι επιφάνειες που θα γίνουν οι εργασίες;</div>
          <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              defaultValue="Έως 15 τ.μ."
              required
            >

              <option>Έως 15 τ.μ.</option>
              <option>16 τ.μ. - 50 τ.μ.</option>
              <option>51 τ.μ. - 100 τ.μ.</option>
              <option>100 τ.μ. και άνω</option>
            </select>
          </label>
          <div className="Form--Label">Πότε θα ήθελες να ξεκινήσεις τις εργασίες;</div>
          <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              defaultValue="Άμεσα"
              required
            >

              <option value="Άμεσα">Άμεσα</option>
              <option value="Σε 10 μέρες">Μέσα στις επόμενες 10 ημέρες</option>
              <option value="Σε 1 μήνα">Μέσα στις επόμενες 30 ημέρες</option>
              <option value="Δεν ξέρω">Δεν έχω συγκεκριμένο χρονικό προγραμματισμό</option>
            </select>
          </label>
          
          <label className="Form--Label Form-Checkbox">
            <input
              className="Form--Input Form--CheckboxInput"
              name="acceptTerms"
              type="checkbox"
            />
            <span>Αποδέχομαι τους Όρους και Προϋποθέσεις</span>
          </label>
          {/* <div
            className="g-recaptcha"
            data-sitekey="6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA"
          /> */}
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Υποβολη"
            disabled={this.state.disabled}
          />
        </form>
      </Fragment>
    )
  }
}

export default Form

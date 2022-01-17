import { Form,Button } from "react-bootstrap"
import { useTranslation } from 'react-i18next'

const SignUp =()=>{

    const {t}= useTranslation()
return(
<>
<Form>
<Form.Group controlId="formBasicEmail">
    <Form.Label>{t("firstname")}</Form.Label>
    <Form.Control type="email" placeholder="" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>{t("lastname")}</Form.Label>
    <Form.Control type="email" placeholder="" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>{t("email")}</Form.Label>
    <Form.Control type="email" placeholder={t("email")} />
    <Form.Text className="text-muted">
    {t("emailshare")}
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>{t("password")}</Form.Label>
    <Form.Control type="password" placeholder={t("password")} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("checkbox")} />
  </Form.Group>
  <Button variant="primary" type="submit">
  {t("starttochat")}
  </Button>
</Form></>)
}
export default SignUp
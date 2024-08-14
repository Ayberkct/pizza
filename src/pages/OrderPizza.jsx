import FoodCard from "../components/foodCard/foodCard";
import Header from "../components/header/Header";
import "./OrderPizza.css";
import { Form, FormGroup, Input, Label } from "reactstrap";

function OrderPizza() {
  return (
    <div>
      <Header />
      <FoodCard />
      <div className='food-size-container'>
        <p>
          Boyut Seç <span style={{ color: "red" }}>*</span>
        </p>
        <Form className='food-size'>
          <FormGroup check inline>
            <Input type='radio' id='radio-s' name='size' />
            <Label check for='radio-s'>
              S
            </Label>
          </FormGroup>

          <FormGroup check inline>
            <Input type='radio' id='radio-m' name='size' />
            <Label check for='radio-m'>
              M
            </Label>
          </FormGroup>

          <FormGroup check inline>
            <Input type='radio' id='radio-l' name='size' />
            <Label check for='radio-l'>
              L
            </Label>
          </FormGroup>
        </Form>
        <p>
          Hamur Seç <span style={{ color: "red" }}>*</span>
        </p>
        <Form>
          <FormGroup>
            <Input
              type='select'
              id='hamur-kal'
              placeholder='--Hamur Kalınlığı Seçin--'
            >
              <option value=''>--Hamur Kalınlığı Seçin--</option>
              <option value='ince'>İnce</option>
              <option value='orta'>Orta</option>
              <option value='kalin'>Kalın</option>
            </Input>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup check>
            <Input type='checkbox' id='checkbox1' />
            <Label for='checkbox1' check>
              Seçenek 1
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox2' />
            <Label for='checkbox2' check>
              Seçenek 2
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox3' />
            <Label for='checkbox3' check>
              Seçenek 3
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox4' />
            <Label for='checkbox4' check>
              Seçenek 4
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox5' />
            <Label for='checkbox5' check>
              Seçenek 5
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox6' />
            <Label for='checkbox6' check>
              Seçenek 6
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox7' />
            <Label for='checkbox7' check>
              Seçenek 7
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox8' />
            <Label for='checkbox8' check>
              Seçenek 8
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox9' />
            <Label for='checkbox9' check>
              Seçenek 9
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox10' />
            <Label for='checkbox10' check>
              Seçenek 10
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox11' />
            <Label for='checkbox11' check>
              Seçenek 11
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox12' />
            <Label for='checkbox12' check>
              Seçenek 12
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox13' />
            <Label for='checkbox13' check>
              Seçenek 13
            </Label>
          </FormGroup>

          <FormGroup check>
            <Input type='checkbox' id='checkbox14' />
            <Label for='checkbox14' check>
              Seçenek 14
            </Label>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default OrderPizza;

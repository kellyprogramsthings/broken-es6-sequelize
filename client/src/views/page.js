import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import _ from "lodash";
import axios from 'axios';
import { api } from '../utils/api';
import authHeader from "../services/auth-header";

export function Page() {
  const [pages, setPages] = useState();
  const [pageTitleForEdit, setPageTitleForEdit] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => 
    { getPages(); }, []
  );

  const getPages = () => {
    axios.get(api + '/pages', { headers: authHeader() })
    .then(response => {
      setPages(response.data.pages);
      setLoading(false);
    })
  }

  const onChangePageTitle = (event) => { setPageTitleForEdit(event.target.value); }

  const addToList = () => {
    if (!pageTitleForEdit) return;

    axios.post(api + '/api/page', {title: pageTitleForEdit, createdAt: Date.now(), updatedAt: Date.now()})
      .then(response => {getPages();})
  }

  return(
    <Fragment> {/* This fragment is because it hates console logging otherwise */}
      <Container>
        <Row>
          <Col>Add new page (not saved in the database yet)</Col>
        </Row>
        <Row>
          <Col>
            <Input
              value={pageTitleForEdit}
              onChange={onChangePageTitle}
            />
          </Col>
          <Col>
            <Button
              onClick={addToList}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Fragment>
          {loading 
            ? <Row><Col>Loading from Heroku... may take a minute to wake up</Col></Row>
            : <Fragment>
                {_.map(pages, p =>
                  <Row key={p.id}>
                    <Col>
                      {p.id}
                    </Col>
                    <Col>
                      {p.title}
                    </Col>
                  </Row>
                )}
              </Fragment>
          }
        </Fragment>
      </Container>
    </Fragment>
  );
}
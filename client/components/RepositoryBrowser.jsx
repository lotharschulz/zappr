import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import RepositoryList from './RepositoryList.jsx'
import RepositoryDetail from './RepositoryDetail.jsx'

export default class RepositoryBrowser extends Component {
  static propTypes = {
    selected: PropTypes.string.isRequired,
    repos: PropTypes.object.isRequired,
    toggleCheck: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired
  };

  static defaultProps = {
    selected: '',
    repos: {items: []}
  };

  render() {
    const {selected, repos, fetchAll, toggleCheck} = this.props
    const selectedRepo = repos.items.find(r => r.full_name === selected)
    return (
      <Row>
        <Col sm={8} className='col-sm-push-4'>
          <RepositoryDetail repository={selectedRepo}
                            toggleCheck={toggleCheck}/>
        </Col>
        <Col sm={4} className='col-sm-pull-8'>
          <RepositoryList isUpdating={repos.isFetching}
                          repositories={repos.items}
                          fetchAll={fetchAll}
                          selected={selected}/>
        </Col>
      </Row>
    )
  }
}

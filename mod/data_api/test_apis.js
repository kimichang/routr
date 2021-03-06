/**
 * @author Pedro Sanders
 * @since v1
 *
 * Unit Test for the "Data APIS"
 */
import DSUtil from 'data_api/utils'
import TestUtil from 'data_api/test_utils'

export const testGroup = { name: "Data APIS" }

testGroup.deep_search = function () {
    const agents = []
    agents.push(TestUtil.buildAgent('John Doe', ['sip.local'], '1001'))
    agents.push(TestUtil.buildAgent('Jane Doe', ['sip.local'], '1002'))
    agents.push(TestUtil.buildAgent('Jake Doe', ['sip.local'], '1003'))

    let response = {
        status: 200,
        result: agents
    }

    response = DSUtil.deepSearch(response, 'spec.credentials.username', '1001')
    const agent = response.result
    assertTrue(agent.metadata.name == 'John Doe')
}

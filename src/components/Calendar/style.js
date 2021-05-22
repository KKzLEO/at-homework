import styled from 'styled-components'
import breakpoints from 'constants/breakpoints'
import { down } from 'utils/mediaQuery'

export const Container = styled.div`
  margin: 1.25rem;
  padding: 10px;
  background: white;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  border-radius: 4px;

  ${down(breakpoints.small)} {
    margin: 0;
  }
`

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.87);
`

export const FunctionBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`

export const Navigation = styled.div`
  margin-right: 10px;
`

export const NavigationButton = styled.button`
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
`

export const DateTitle = styled.div`
  flex: 1;
`

export const TimeZoneDesc = styled.div`
  font-size: 12px;
  margin-top: 5px;
`

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 200px;
`
export const CalendarItem = styled.div`
  border-top: 4px solid;
  border-color: ${(props) => (props.isAvailable ? '#02cab9' : '#b6b6b6')};
  flex: 1;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  ${down(breakpoints.small)} {
    margin-right: 5px;
  }
`

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WeekDay = styled(GridItem)`
  margin-top: 10px;
`
export const Date = styled(GridItem)`
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Time = styled(GridItem)`
  margin-bottom: 10px;
  font-size: 12px;
  color: ${(props) => (props.isAvailable ? '#02cab9' : '#b6b6b6')};
  font-weight: ${(props) => (props.isAvailable ? 700 : 300)};
`

import styled from 'styled-components'
import Calendar from 'react-calendar'

export const CustomCalendar = styled(Calendar)`
  width: 100%;
  flex: 1;
  padding: 1.2em 1em;
  padding-bottom: 0;

  font-family: 'SDSamliphopangche_Basic', sans-serif;
  font-size: 1.2em;

  &.react-calendar {
    border-radius: 10px !important;
    box-shadow: 0 1px 3px 0.5px rgba(0, 0, 0, 0.15);
    border: none;
  }

  .react-calendar__navigation {
    margin-bottom: 0.7em;
  }

  .react-calendar__navigation__arrow {
    background-color: #f8f8f8;
    border: none;
    border-radius: 10em;
    color: #333;
    font-size: 1.5em;
  }

  .react-calendar__navigation__label {
    border-radius: 1em;
    &:hover {
      background-color: #f8f8f8 !important;
    }
  }

  .react-calendar__navigation__label__labelText {
    font-family: 'SDSamliphopangche_Basic', sans-serif;
    font-size: 2em;
    font-weight: 500;
    color: #525252;
  }

  .react-calendar__month-view__weekdays {
    background-color: #f8f8f8;
    border-radius: 1em;
    padding: 0.2em 0 0.1em 0;
    margin-bottom: 0.7em;

    div {
      color: #525252;
      font-size: 1.5em;
      font-weight: 500;
      text-decoration: none;
    }

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    abbr {
      background: #fff;
      border-radius: 10em;
      padding: 0.35em 0.5em 0.3em 0.5em;
    }

    &:first-child abbr {
      background: #ff8282;
      color: #fff;
    }
  }

  .react-calendar__month-view__days__day {
    border-radius: 10em;
    color: #525252;

    font {
      font-size: 1.21em;
    }

    // 일요일만 배경색 다르게
    &:nth-child(7n + 1) {
      color: #ff8484;
    }

    &:hover {
      background: none;

      abbr {
        background: #fff;
        border-radius: 10em;
        padding: 0.9em 0.6em 0.3em 0.6em;
        background: rgba(255, 219, 88, 0.5) !important;
      }
    }
    &:focus {
      background: none;
    }
    &:active {
      background: none;
    }
  }

  .react-calendar__tile--active {
    background: none;
  }

  .react-calendar__tile--range {
    background: none;
  }

  .mentoring {
    abbr {
      background: #fff;
      border-radius: 10em;
      padding: 0.9em 0.6em 0.3em 0.6em;
      background: #ffdb58 !important;
      color: #fff !important;
    }
  }

  .react-calendar__tile--now {
    background: none;
    abbr {
      background: #fff;
      border-radius: 10em;
      padding: 0.9em 0.6em 0.3em 0.6em;
      background: #ff8282 !important;
      color: #fff !important;
    }

    &.mentoring {
      abbr {
        background: #fff;
        border-radius: 10em;
        padding: 0.9em 0.6em 0.3em 0.6em;
        background: #ffdb58 !important;
        color: #ff8282 !important;
      }
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc !important;
  }
`

export const ScheduleContainer = styled.div`
  flex: 1;
  width: 0;
  display: flex;
  flex-direction: column;
  min-width: 15em;
`

export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.3em;
`

import { AirlineInitiatedChange } from './AirlineInitiatedChangesTypes'

export const mockAirlineInitiatedChange: AirlineInitiatedChange = {
  updated_at: '2023-02-08T12:42:31.038989Z',
  travel_agent_ticket: null,
  removed: [
    {
      conditions: {
        change_before_departure: {
          penalty_currency: 'GBP',
          penalty_amount: '100.00',
          allowed: true,
        },
      },
      destination_type: 'airport',
      origin_type: 'airport',
      segments: [
        {
          passengers: [
            {
              cabin_class_marketing_name: 'Economy',
              cabin_class: 'economy',
              baggages: [],
            },
          ],
          origin: {
            time_zone: 'Europe/London',
            name: 'Heathrow Airport',
            longitude: -0.458118,
            latitude: 51.470311,
            id: 'arp_lhr_gb',
            icao_code: 'EGLL',
            iata_country_code: 'GB',
            iata_code: 'LHR',
            iata_city_code: 'LON',
            city_name: 'London',
            city: {
              name: 'London',
              id: 'cit_lon_gb',
              iata_country_code: 'GB',
              iata_code: 'LON',
            },
          },
          operating_carrier_flight_number: '0472',
          operating_carrier: {
            name: 'British Airways',
            logo_symbol_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/BA.svg',
            logo_lockup_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/BA.svg',
            id: 'arl_00009VME7DBKeMags5CliQ',
            iata_code: 'BA',
            conditions_of_carriage_url:
              'https://www.britishairways.com/en-gb/information/legal/british-airways/general-conditions-of-carriage',
          },
          marketing_carrier_flight_number: '0472',
          marketing_carrier: {
            name: 'British Airways',
            logo_symbol_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/BA.svg',
            logo_lockup_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/BA.svg',
            id: 'arl_00009VME7DBKeMags5CliQ',
            iata_code: 'BA',
            conditions_of_carriage_url:
              'https://www.britishairways.com/en-gb/information/legal/british-airways/general-conditions-of-carriage',
          },
          id: 'seg_00009htYpSCXrwaB9Dn456',
          duration: 'PT2H10M',
          distance: null,
          destination: {
            time_zone: 'Europe/Madrid',
            name: 'Barcelona–El Prat Josep Tarradellas Airport',
            longitude: 2.080877,
            latitude: 41.297273,
            id: 'arp_bcn_es',
            icao_code: 'LEBL',
            iata_country_code: 'ES',
            iata_code: 'BCN',
            iata_city_code: 'BCN',
            city_name: 'Barcelona',
            city: null,
          },
          departing_at: '2023-03-26T06:15:00',
          arriving_at: '2023-03-26T09:25:00',
          aircraft: {
            name: 'Airbus A320 (sharklets)',
            id: 'arc_00009Y7nq3J0w9nlhN3x3Y',
            iata_code: '32A',
          },
        },
      ],
      origin: {
        time_zone: 'Europe/London',
        name: 'Heathrow Airport',
        longitude: -0.458118,
        latitude: 51.470311,
        id: 'arp_lhr_gb',
        icao_code: 'EGLL',
        iata_country_code: 'GB',
        iata_code: 'LHR',
        iata_city_code: 'LON',
        city_name: 'London',
        city: {
          name: 'London',
          id: 'cit_lon_gb',
          iata_country_code: 'GB',
          iata_code: 'LON',
        },
      },
      id: 'sli_00009htYpSCXrwaB9Dn123',
      duration: 'PT2H10M',
      destination: {
        time_zone: 'Europe/Madrid',
        name: 'Barcelona–El Prat Josep Tarradellas Airport',
        longitude: 2.080877,
        latitude: 41.297273,
        id: 'arp_bcn_es',
        icao_code: 'LEBL',
        iata_country_code: 'ES',
        iata_code: 'BCN',
        iata_city_code: 'BCN',
        city_name: 'Barcelona',
        city: null,
      },
      changeable: null,
    },
  ],
  order_id: 'ord_00009hthhsUZ8W4LxQgkjo',
  id: 'aic_00001876aqC8c5umZmrRds',
  created_at: '2023-02-08T12:42:31.038989Z',
  available_actions: ['accept', 'cancel', 'change'],
  added: [
    {
      conditions: {
        change_before_departure: {
          penalty_currency: 'GBP',
          penalty_amount: '100.00',
          allowed: true,
        },
      },
      destination_type: 'airport',
      origin_type: 'airport',
      segments: [
        {
          passengers: [
            {
              cabin_class_marketing_name: 'Economy',
              cabin_class: 'economy',
              baggages: [],
            },
          ],
          origin: {
            time_zone: 'Europe/London',
            name: 'Heathrow Airport',
            longitude: -0.458118,
            latitude: 51.470311,
            id: 'arp_lhr_gb',
            icao_code: 'EGLL',
            iata_country_code: 'GB',
            iata_code: 'LHR',
            iata_city_code: 'LON',
            city_name: 'London',
            city: {
              name: 'London',
              id: 'cit_lon_gb',
              iata_country_code: 'GB',
              iata_code: 'LON',
            },
          },
          operating_carrier_flight_number: '0474',
          operating_carrier: {
            name: 'British Airways',
            logo_symbol_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/BA.svg',
            logo_lockup_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/BA.svg',
            id: 'arl_00009VME7DBKeMags5CliQ',
            iata_code: 'BA',
            conditions_of_carriage_url:
              'https://www.britishairways.com/en-gb/information/legal/british-airways/general-conditions-of-carriage',
          },
          marketing_carrier_flight_number: '0474',
          marketing_carrier: {
            name: 'British Airways',
            logo_symbol_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/BA.svg',
            logo_lockup_url:
              'https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/BA.svg',
            id: 'arl_00009VME7DBKeMags5CliQ',
            iata_code: 'BA',
            conditions_of_carriage_url:
              'https://www.britishairways.com/en-gb/information/legal/british-airways/general-conditions-of-carriage',
          },
          id: 'seg_00009htYpSCXrwaB9Dn457',
          duration: 'PT2H15M',
          distance: null,
          destination: {
            time_zone: 'Europe/Madrid',
            name: 'Barcelona–El Prat Josep Tarradellas Airport',
            longitude: 2.080877,
            latitude: 41.297273,
            id: 'arp_bcn_es',
            icao_code: 'LEBL',
            iata_country_code: 'ES',
            iata_code: 'BCN',
            iata_city_code: 'BCN',
            city_name: 'Barcelona',
            city: null,
          },
          departing_at: '2023-03-28T11:00:00',
          arriving_at: '2023-03-28T14:15:00',
          aircraft: {
            name: 'Airbus A320neo',
            id: 'arc_00009lcSPZuSbgKG1u4Pkn',
            iata_code: '32N',
          },
        },
      ],
      origin: {
        time_zone: 'Europe/London',
        name: 'Heathrow Airport',
        longitude: -0.458118,
        latitude: 51.470311,
        id: 'arp_lhr_gb',
        icao_code: 'EGLL',
        iata_country_code: 'GB',
        iata_code: 'LHR',
        iata_city_code: 'LON',
        city_name: 'London',
        city: {
          name: 'London',
          id: 'cit_lon_gb',
          iata_country_code: 'GB',
          iata_code: 'LON',
        },
      },
      id: 'sli_00009htYpSCXrwaB9Dn124',
      duration: 'PT2H15M',
      destination: {
        time_zone: 'Europe/Madrid',
        name: 'Barcelona–El Prat Josep Tarradellas Airport',
        longitude: 2.080877,
        latitude: 41.297273,
        id: 'arp_bcn_es',
        icao_code: 'LEBL',
        iata_country_code: 'ES',
        iata_code: 'BCN',
        iata_city_code: 'BCN',
        city_name: 'Barcelona',
        city: null,
      },
      changeable: false,
    },
  ],
  action_taken_at: null,
  action_taken: null,
}

export const mockAirlineInitiatedChangeAccepted: AirlineInitiatedChange = {
  ...mockAirlineInitiatedChange,
  action_taken: 'accepted',
  action_taken_at: '2022-01-17T10:12:14.545Z',
}

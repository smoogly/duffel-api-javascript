import { Client } from '../../Client'
import { Resource } from '../../Resource'
import {
  DuffelResponse,
  ListOffersParams,
  Offer,
  LoyaltyProgrammeAccounts,
  UpdateOffer,
} from '../../types'

interface UpdateOfferBodyParameters {
  loyalty_programme_accounts: LoyaltyProgrammeAccounts[]
  given_name: string
  family_name: string
}

/**
 * Each offer represents flights you can buy from an airline at a particular price that meet your search criteria.
 * @class
 * @link https://duffel.com/docs/api/offers
 */
export class Offers extends Resource {
  /**
   * Endpoint path
   */
  path: string

  constructor(client: Client) {
    super(client)
    this.path = 'air/offers'
  }

  /**
   * Retrieves an offer by its ID
   * @param {string} id - Duffel's unique identifier for the offer
   * @param {string} return_available_services - When set to true, the offer resource returned will include all the available_services returned by the airline. If set to false, the offer resource won't include any available_services.
   * @link https:/duffel.com/docs/api/offers/get-offer-by-id
   */
  public get = async (
    id: string,
    params?: { return_available_services: boolean }
  ): Promise<DuffelResponse<Offer>> =>
    this.request({ method: 'GET', path: `${this.path}/${id}`, params })

  /**
   * Retrieves a page of offers. The results may be returned in any order.
   * @param {Object.<ListOffersParams>} params - Endpoint options (optional: limit, after, before, max_connections, sort)
   * @param {string} params.offer_request_id - Duffel's unique identifier for the offer request, returned when it was created
   * @link https://duffel.com/docs/api/offers/get-offers
   */
  public list = ({
    offer_request_id,
    ...params
  }: ListOffersParams): Promise<DuffelResponse<Offer[]>> =>
    this.request({
      method: 'GET',
      path: this.path,
      params: {
        ...params,
        offer_request_id,
      },
    })

  /**
   * Retrieves a generator of all offers. The results may be returned in any order.
   * @param {Object.<ListOffersParams>} params - Endpoint options (optional: limit, after, before, max_connections, sort)
   * @param {string} params.offer_request_id - Duffel's unique identifier for the offer request, returned when it was created
   * @link https://duffel.com/docs/api/offers/get-offers
   */
  public listWithGenerator = ({
    offer_request_id,
    ...params
  }: ListOffersParams): AsyncGenerator<DuffelResponse<Offer>, void, unknown> =>
    this.paginatedRequest({
      path: this.path,
      params: {
        ...params,
        offer_request_id,
      },
    })

  /**
   * Some offer passenger fields are updateable. Each field that can be updated is detailed in the request object.
   * @param {string} offerId - Duffel's unique identifier for the offer
   * @param {string} passengerId - The identifier for the passenger. This ID will be generated by Duffel
   * @param {string} params.family_name - The passenger's family name. Only space, -, ', and letters from the ASCII, Latin-1 Supplement and Latin Extended-A (with the exceptions of Æ, æ, Ĳ, ĳ, Œ, œ, Þ, and ð) Unicode charts are accepted. All other characters will result in a validation error. The minimum length is 1 character, and the maximum is 20 characters.
   * @param {string} params.given_name - The passenger's given name. Only space, -, ', and letters from the ASCII, Latin-1 Supplement and Latin Extended-A (with the exceptions of Æ, æ, Ĳ, ĳ, Œ, œ, Þ, and ð) Unicode charts are accepted. All other characters will result in a validation error. The minimum length is 1 character, and the maximum is 20 characters.
   * @param {Object.<LoyaltyProgrammeAccounts>} params.loyalty_programme_accounts - The Loyalty Programme Accounts for this passenger
   */
  public update = async (
    offerId: string,
    passengerId: string,
    params: UpdateOfferBodyParameters
  ): Promise<DuffelResponse<UpdateOffer>> =>
    this.request({
      method: 'PATCH',
      path: `${this.path}/${offerId}/passengers/${passengerId}`,
      ...(params && { data: params }),
    })
}

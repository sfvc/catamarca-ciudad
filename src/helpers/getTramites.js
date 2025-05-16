import { catamarcaApi } from "@api/catamarcaApi"

export const getTramites = async (query, page, category) => {
	let params = {
		meta: 'total_count,filter_count',
		sort: '-nombre',
		fields: '*,area.*,categoria.*',
		limit: 5,
		page
	}

	if(query) {
		// params['filter[nombre][_icontains]='] = query
		params['filter[_or][0][nombre][_icontains]'] = query
		params['filter[_or][1][objeto][_icontains]'] = query
	}

	if (category) {
		params['filter[categoria][id][_eq]'] = category;
	}
	
	const response = await catamarcaApi.get(`items/tramites`, { params })
	const { data } = response
	return data
}
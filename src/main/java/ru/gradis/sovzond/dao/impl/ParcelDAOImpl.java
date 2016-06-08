package ru.gradis.sovzond.dao.impl;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import ru.gradis.sovzond.dao.ParcelDAO;
import ru.gradis.sovzond.jdbc.mapper.ParcelRowMapper;
import ru.gradis.sovzond.jdbc.sql.SqlStorage;
import ru.gradis.sovzond.model.Parcel;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * Created by donchenko-y on 6/6/16.
 */
public class ParcelDAOImpl implements ParcelDAO {


	private JdbcTemplate jdbcTemplate;

	public ParcelDAOImpl(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public Parcel get(int Id) {
		return null;
	}

	@Override
	public List<Parcel> list() {
		ObjectMapper mapper = new ObjectMapper();

		String sql = SqlStorage.GET_ALL_PARCEL;

		List<Parcel> parcelList = jdbcTemplate.query(sql, new ParcelRowMapper());

		return parcelList;
	}

	@Override
	public List<Map<String, Object>> selectAll() {
		return null;
	}
}

package ru.gradis.sovzond.dao;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
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

		String sql = "SELECT * FROM parcel";
		List<Parcel> parcelList = jdbcTemplate.query(sql, new RowMapper<Parcel>() {

			@Override
			public Parcel mapRow(ResultSet rs, int rowNum) throws SQLException {
				Parcel ref = new Parcel();

				ref.setId(rs.getInt("id"));
				ref.setAddressNote(rs.getString("addressnote"));
				ref.setArea(rs.getString("area"));
				ref.setCategory(rs.getString("category"));
				ref.setCnum(rs.getString("cnum"));
				ref.setDateCreated(rs.getString("datecreated"));
				ref.setUtilizationByDoc(rs.getString("utilizationbydoc"));
				ref.setCost(rs.getString("cost"));

				return ref;
			}

		});
		return parcelList;
	}

	@Override
	public List<Map<String, Object>> selectAll() {
		return null;
	}
}

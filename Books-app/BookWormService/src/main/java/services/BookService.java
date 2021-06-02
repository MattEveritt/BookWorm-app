package services;


import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.appengine.api.utils.SystemProperty;
import java.sql.Statement;

import conn.Connections;
import data.Book;
@Path("/bookservice")
public class BookService {
		@GET
		@Path("/readbooks/{p1}")
		public ArrayList<Book> readBooks(@PathParam("p1") int id) {
			String sql="select * from book where genre=?";
			ResultSet RS=null;
			ArrayList<Book> list=new ArrayList<>();
			Connection conn=null;
			try {
			    if (SystemProperty.environment.value() ==SystemProperty.Environment.Value.Production) {  
			    	conn = Connections.getProductionConnection();
			    }
			    else {
			    	conn = Connections.getDevConnection();
			    }
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			Statement stmt;
			try {
				stmt = conn.createStatement();
				RS=stmt.executeQuery(sql);
				while (RS.next()) {
					Book b=new Book();
					b.setId(RS.getInt("id"));
					b.setTitle(RS.getString("title"));
					b.setGenre(RS.getString("genre"));
					b.setAuthor(RS.getString("author"));
					b.setDescription(RS.getString("description"));
					list.add(b);
				}
			} catch (SQLException e) {
			}
			if (conn!=null) {
				try {
					conn.close();
				} catch (SQLException e) {
				}
			}
			return list;
		}
		@GET
		@Produces(MediaType.APPLICATION_JSON)//Method returns object as a JSON string
		@Path("/readallbooks")
		public ArrayList<Book> readAll() {
			String sql="select * from book where genre='g1'";
			ResultSet RS=null;
			ArrayList<Book> list=new ArrayList<>();
			Connection conn=null;
			try {
			    if (SystemProperty.environment.value() ==SystemProperty.Environment.Value.Production) {  
			    	conn = Connections.getProductionConnection();
			    }
			    else {
			    	conn = Connections.getDevConnection();
			    }
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			Statement stmt;
			try {
				stmt = conn.createStatement();
				RS=stmt.executeQuery(sql);
				while (RS.next()) {
					Book b=new Book();
					b.setId(RS.getInt("id"));
					b.setTitle(RS.getString("title"));
					b.setGenre(RS.getString("genre"));
					b.setAuthor(RS.getString("author"));
					b.setDescription(RS.getString("description"));
					list.add(b);
				}
			} catch (SQLException e) {
			}
			if (conn!=null) {
				try {
					conn.close();
				} catch (SQLException e) {
				}
			}
			return list;
		}

}

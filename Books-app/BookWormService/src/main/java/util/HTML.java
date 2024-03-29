package util;

import java.io.PrintWriter;


import java.util.List;

import data.Book;

public class HTML {
	public static void printStart(PrintWriter out) {
		out.println("<!DOCTYPE html><html><head><title>BookList</title></head><body>");
	}

	public static void printEnd(PrintWriter out) {
		out.println("</body></html>");
	}
	public static void printTable(PrintWriter out, List<Book> bookList) {
		deleteScript(out);
		out.println("<h1>Fished fish</h1>");
		out.println("<table border='1'>");
		for (int i=0;i<bookList.size();i++) {
			Book b=bookList.get(i);
			out.println("<tr><td>"+b.getId()+"<td>"+b.getTitle()+"<td>"+b.getAuthor()+
					"<td><a href='#' onclick='deletePerson("+b.getId()+");return false;'>Poista</a>");
		}
		out.println("</table>");
		out.println("<div id='loginout'>Log In Out</div>");
//		out.println("<a href='./index.html'>Back to form</a>");
	}
	private static void deleteScript(PrintWriter out) {
		
	    out.println("<script>\n"+
	    "function deletePerson(id){\n"+
	    	"window.alert(\"About to delete\");\n"+
	    	"xmlhttp = new XMLHttpRequest();\n"+
	    	"xmlhttp.onreadystatechange = function() {\n"+
	    	  "if (this.readyState == 4 && this.status == 200) {\n"+
	    	    "document.getElementById('loginout').innerHTML=this.responseText;"+"\n"+
	    	  "}\n"+
	    	"};\n"+
	    	"xmlhttp.open(\"GET\", \"/rest/personservice/deleteperson/\"+id);\n"+
	    	"xmlhttp.send();\n"+    	
	    "}\n"+
	    "</script>\n");
	}
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace LCMS.Data.Migrations
{
    public partial class InitialDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Crs_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Crs_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crs_Number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crs_Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crs_Blurb = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Crs_Id);
                });

            migrationBuilder.CreateTable(
                name: "Pages",
                columns: table => new
                {
                    Pg_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pg_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pg_Content = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pages", x => x.Pg_Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Pages");
        }
    }
}
